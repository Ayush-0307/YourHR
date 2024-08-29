import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Input from '../Components/Input'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
import { doc, setDoc, getFirestore } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';

const Signup = () => {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cnfpass, setCnfpass] = useState("")
    const [resume, setResume] = useState(null);
    const [Loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const upload = () => {
        // e.preventDefault();
        setLoading(true)
        if (name !== "" && number !== "" && email !== "" && password !== "" && cnfpass !== "" && resume) {
            if (password === cnfpass) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        alert("Resume uploded Successfully");
                        setName("")
                        setNumber("")
                        setEmail("")
                        setPassword("")
                        setCnfpass("")
                        setResume(null)
                        setLoading(false)

                        console.log(user);
                        createDB(user)
                        navigate("/Thankyou")
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        alert(errorMessage)
                        setLoading(false)
                    });
            }
            else {
                alert("Password and Confirm Password didn't match!")
                setLoading(false)
            }
        }
        else {
            alert("All Fields are Mandatory!")
            setLoading(false)
        }
    }

    const db = getFirestore();
    const createDB = async (user) => {

        try {
            const storageRef = ref(storage, `resumes/${user.uid}/${resume.name}`);
            await uploadBytes(storageRef, resume);
            const downloadURL = await getDownloadURL(storageRef);

            await setDoc(doc(db, "users", user.uid), {
                name: user.displayName ? user.displayName : name,
                email: user.email ? user.email : email,
                id: user.uid,
                photoUrl: user.photoURL,
                number: user.phoneNumber ? user.phoneNumber : number,
                resumeUrl: downloadURL,
                createdAt: new Date()
            });
        } 
        catch (error) {
            console.error("Error creating document: ", error);
        }
    }

    return (
        <div className='h-screen bg-gray-200'>
            <Navbar />
            <div className="flex item-center justify-center mt-20 md:mt-14">
                <div className='form border-2 border-black md:w-1/4 w-full m-16 md:m-0 p-2 rounded-lg flex flex-col gap-2 md:gap-0 md:block bg-white'>
                    <h1 className='text-2xl text-center font-bold'>SignUp</h1>
                    <Input type="text" value={name.charAt(0).toUpperCase() + name.slice(1)} setValue={setName} placeholder="John Smith" info="Full Name:" />
                    <Input type="number" value={number} setValue={setNumber} placeholder="9876543210" info="Contact No:" />
                    <Input type="email" value={email} setValue={setEmail} placeholder="johnsmith@gmail.com" info="Email:" />
                    <Input type="password" value={password} setValue={setPassword} placeholder="John123" info="Password:" />
                    <Input type="password" value={cnfpass} setValue={setCnfpass} placeholder="John123" info="Confirm Password:" />
                    <Input type="file" setValue={setResume} info={<span>Upload Your Resume: <span style={{ color: 'red' }}>(.pdf only)</span></span>} accept="application/pdf" />
                    <div className='w-full'>
                        <button className='w-full border-2 rounded-full py-1 text-xl outline-none font-bold mt-6 mb-1 bg-blue-600 hover:text-white hover:bg-blue-500' onClick={upload}>{Loading ? "Loading" : "Upload"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
