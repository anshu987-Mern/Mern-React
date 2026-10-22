import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Demo = () => {
  // const [name, setName] = useState(" ");
  const [user, setUser] = useState([])
  const [use, setUse] = useState([])
  const [member, setMember] = useState([])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  // const handleSubmit = (event) => {

  //   event.preventDefault();
  //   alert(`Your name is ${name}`)
  // }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUser(data)
        console.log(user);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        console.log(res)
        setUse(res.data)
      })
  }, [])
  const getUser = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users/");
      setMember(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  //post
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts",
        {
          title: title,
          body: body,
        }
      );
      console.log(response.data);
      alert("Data Post Successfully") 
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    // <div>
    //   <h1>Practice Form</h1>
    //   <form onSubmit={handleSubmit}>
    //   <label> First Name = </label>
    //   <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Please Enter Your First Name'/>
    //   {/* <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Please Enter Your Second Name'/> */}
    //   <button type="submit">Submit</button>
    //   </form>
    // </div>
    <>
      <h2>API Integration</h2>
      {/* {user.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))} */}

      {/* {
        use.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      } */}

      <button onClick={getUser}>get User</button>
      <div>
        {member && (
          <div>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
          </div>
        )}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea type="text" placeholder='body' value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button type='submit'>Submit</button>
        </form>
      </div>

    </>
  )
}

export default Demo
