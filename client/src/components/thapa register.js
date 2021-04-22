// import {useHistory} from 'react-router-dom';

// const Register = () => {
//   const history = useHistory();
//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//     password: "",
//     c_password: "",
//   });
//   let name, value

//   const onChange = (e) => {
//     console.log(e);
//     name = e.target.name;
//     value = e.target.value

//     setUser ({...user,[name]:value})
//   };

//   const PostData = async (e) =>{
//    e.preventDefault();
//    const {name,username,email,password,c_password} = user;
//    const res = await fetch("/register",{
//      method: "POST",
//      headers:{
//        "Content-Type" : "application/json"
//      },
//      body:JSON.stringify({
//      name,username,email,password,c_password
//      })
//    });

//    const data = await res.json();
//    if (data.status === 200 || !data){
//      window.alert('Invalid Registration');
//      console.log('Invalid Registration');
//    }
//    else{
//     window.alert('Registration Successful');
//     console.log('Registration Successful');
    
//     history.push("/login")

//    }
//   }

