import React,{useState,useEffect,useContext} from 'react'
import {Link } from "react-router-dom"
import LeftNav from './LeftNav'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Maincategory } from '../../Store/MaincategoryContextProvider';

export default function AdminMainCategory() {
  var [maincategory,setMaincategory] = useState([])
  var {get,deleteData} = useContext(Maincategory)
  async function getAPIData(){
       var response = await get() 
      if(response.result==="Done")
      setMaincategory(response.data)
      else
      alert(response.message)
} 
async function deleteRecord(_id){
    var item = {
      _id:_id
    }
      await deleteData(item)
      getAPIData()
}
useEffect(()=>{
     getAPIData()
  },[])
  return (
    <div className='container-fluid mt-2' >
        <div className='row'>
            <div className=' col-lg-2 col-md-4 col-sm-6 col-12'>
                <LeftNav/>
            </div>
            <div className=' col-lg-10 col-md-8 col-sm-6 col-12'>
                <h5 className='background text-light text-center p-1 '>MainCategory Section <Link to="/admin-add-maincategory"><AddIcon className="text-light"/></Link> </h5>
                <div className='table-responsive'>
                  <table className='table table-light table-striped table-hover'>
                    <tbody>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th></th>
                        <th></th>
                        
                      </tr>
                      {
                        maincategory.map((item,index)=>{
                          return <tr key={index}>
                          <td>{item._id}</td>
                          <td>{item.name}</td>
                          <td><Link to={`Admin-update-maincategory/${item._id}`}><EditIcon /></Link></td>
                          <td><button onClick={()=>deleteRecord(item._id)}  className='btn mybtn'><DeleteForeverIcon/></button></td>
                          
                          
                        </tr>
                        })
                      }
                    </tbody>
                  </table>

                </div>
            </div>
        </div>
    </div>
  )
}
