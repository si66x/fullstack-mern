import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'
import userService from './services/user'
import Blogs from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [user,setUser] = useState()
  const [showMessage,setShowMessage] = useState()

  // useEffect( ()=>{
  //      blogService.getAll().then((data)=>setBlogs(data))
  // },[])

  useEffect(()=>{
    const loggedJSON = window.localStorage.getItem('loggedInBlog')
    if(loggedJSON){
      const user = JSON.parse(loggedJSON)
      setUser(user)
      userService.setToken(user.token)
      blogService.setToken(user.token)
      userService.getSpesificUser().then((result)=>setBlogs(result.blogs))
    }
  },[])

  const handleUserName = (e) =>{
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  
  const handleLogout = () => {
    window.localStorage.removeItem('loggedInBlog')
  } 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
    const user = await loginService.login({username,password})
    setUser(user)
    setUsername('')
    setPassword('')
    window.localStorage.setItem('loggedInBlog', JSON.stringify(user))
    } catch (error) {
      setShowMessage('wrond credentials')
      setTimeout(()=>{
        setShowMessage(null)
      }, 5000)
    
    }   
  }

  return (
    <div>
      <h2>blogs</h2>
      <button onClick={handleLogout}>logout</button>

      <Notification message={showMessage}/>
      {
        user? <Container blog={blogs} user={user} setMessage={setShowMessage}/>
          : <Login handleLogin={handleLogin} username={username} password ={password} setUsername = {setUsername} setPassword = {setPassword} handlePassword={handlePassword} handleUserName={handleUserName}/>
      }
    
    </div>
  )
}

const ContentSetelahLogin =  ({user,blog}) => {
const copyUser = {...user}
const copyOfBlog = [...blog]
  return(
    <div>
      <p>{copyUser.username}</p>
      {
        
         copyOfBlog.map(data=><Blog blog={data} key={data.id}/>)
      }
    </div>
  )
}


const Login = ({handleLogin, username,password, handleUserName,handlePassword,setMessage}) => {
  return(
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">username</label>
        <input type="text" id='username' value={username} onChange={handleUserName}/><br />
        <label htmlFor="password" >password</label>
        <input type="password" id='password' value={password} onChange={handlePassword}/> <br/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}

const FormBlog = ({user,setMessage}) => {
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [url,setUrl] = useState('')
  
  const handleTitle = (e) =>{
    setTitle(e.target.value)
  }

  const handleAuthor = (e) =>{
    setAuthor(e.target.value)
  }

  const handleURL = (e) =>{
    setUrl(e.target.value)
  }

  const handleSubmit = (e) => {
    try{
    e.preventDefault()
    setAuthor('')
    setTitle('')
    setUrl('')
    blogService.create({author,title,url})
    setMessage(`a new blog you're not gonna need by ${user.username}`)
    setTimeout(()=>{
      setMessage(null)
    },5000)
  }    
    catch(error){
      setMessage(`failed to submit`)
      setTimeout(()=>{
        setMessage(`null`)
      },5000)
    }    
  }
  return(
    <div>
      <h1>Create New</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">title</label>
        <input type="text" id='title' onChange={handleTitle} value={title}/><br/>
        <label htmlFor="author">author</label>
        <input type="text" id='author' onChange={handleAuthor} value ={author} /><br/>
        <label htmlFor="url">url</label>
        <input type="text" id='url' onChange={handleURL} value={url} /><br/>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

const Container = ({blog,user, setMessage}) =>{
  return(
    <div>
      <ContentSetelahLogin blog={blog} user={user}/>
      <FormBlog user={user} setMessage={setMessage}/>
    </div>
  )
}
export default App