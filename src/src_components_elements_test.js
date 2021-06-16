import React,{useState} from 'react'

const Test = () => {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if(username.length === 0){
        setLogged(false)
      } else{setLogged(true);}
    }, 700); 
  };
  const logOut = () => {
    setLogged(false) 
    setUsername('')
  }

  return (
    <>
      <input type="text" data-testid="input" value={username} onChange={(evt) => setUsername(evt.target.value)}/>
      <button data-testid="button" disabled={logged} onClick={onSubmit}>Login</button>
      {loading && <h1 data-testid="loading" >Cargando...</h1>}
    {logged && <div data-testid="logged">Has iniciado sesion <button onClick={logOut}>Cerrar sesión</button></div>}
    </>
  );
};
  
export default Test
