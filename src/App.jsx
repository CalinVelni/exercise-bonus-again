import { useState } from 'react'
import './App.css'
import CustomFormElement from './Components/CustomFormElement'

function App() {

  const [formData, setFormData] = useState(
    [
      {
         id: "user-name",
         label: "User Name",
         value: "",
         mode: "input"
      },
      {
         id: "sex",
         label: "Sex",
         value: "",
         mode: "radio",
         options: ["m", "f"]
      },
      {
        id: "fav-color",
        label: "Favourite Color",
        value: "",
        mode: "select",
        options: ["Red", "Green", "Blue"]
      },
      {
         id: "newsletter",
         label: "Newsletter",
         value: false,
         mode: "checkbox"
      }
   ]
  )

  return (<>
    {formData.map((formObj, i) => {
      return (
        <CustomFormElement
          key={formObj.id}
          formProps={formObj}
          handleChange={(e) => {
            if(formObj.mode === "checkbox"){
              const newFd = structuredClone(formData);
              newFd[i].value = e.target.checked;
              setFormData(newFd);
              return              
            }
            const newFd = structuredClone(formData);
            newFd[i].value = e.target.value;
            setFormData(newFd)
          }}
        />
      )
    })}
    <button
      onClick={() => {
        console.log(formData.map(obj => obj.value));
      }}
    >Submit</button>
  </>)
}

export default App
