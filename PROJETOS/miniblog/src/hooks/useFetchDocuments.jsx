import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, query, onSnapshot, where, orderBy, getDocs } from 'firebase/firestore'


export const useFetchDocuments = (docCollection, search = null, uid = null) => {

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {

        async function loadData() {

            if (cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);

            // try {
            //     let q;

            //     q = await getDocs(userCollectionRef);
            //     setDocuments(q.docs.map((doc) => ({
            //         ...doc.data(),
            //         id: doc.id,
            //     })))
            //     console.log(documents)
            // } catch (error) {

            // }

            try {
                let q

                if (search) {
                    q = await query(collectionRef, where("tagsArray", "array-contains", search),
                        (orderBy("createAt", "desc"))
                    )
                } else if (uid) {
                    q = await query(collectionRef, where("uid", "==", uid),
                        (orderBy("createAt", "desc"))
                    )
                } else {
                    q = await query(collectionRef, orderBy("createAt", "desc"))
                }

                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                })

                setLoading(false)

            } catch (error) {
                console.log(error)
                setError(error.message)

                setLoading(false)

            }

        }
        loadData();
    }, [docCollection, documents, search, uid, cancelled])

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { documents, loading, error }
}