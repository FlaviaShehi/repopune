// import React, { Fragment, useState } from 'react'
// import { Modal, Button } from 'react-bootstrap'

// const EditTodo = (todo) => {
//   const [task_name, setTask_name] = useState(todo.task_name)

//   const [show, setShow] = useState(false)

//   const handleClose = () => setShow(false)
//   const handleShow = () => setShow(true)

//   //edit description

//   const updateTodo = async (e) => {
//     e.preventDefault()
//     try {
//       const body = { task_name }
//       const response = await fetch(
//         `http://localhost:5001/todos/${todo.todo_id}`,
//         {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(body),
//         }
//       )
//       window.location = '/'
//     } catch (err) {
//       console.error(err.message)
//     }
//   }

//   return (
//     <Fragment>
//       <button
//         type='button'
//         class='btn btn-primary'
//         data-toggle='modal'
//         data-target={`#id${todo.todo_id}`}
//       >
//         Edit
//       </button>
//       <div
//         class='modal'
//         id={`id${todo.todo_id}`}
//         onClick={() => setTask_name(todo.task_name)}
//       >
//         <div class='modal-dialog'>
//           <div class='modal-content'>
//             <div class='modal-header'>
//               <h4 class='modal-title'>Edit Todo </h4>
//               <button
//                 type='button'
//                 class='close'
//                 data-dismiss='modal'
//                 onClick={() => setTask_name(todo.task_name)}
//               >
//                 &times;
//               </button>
//             </div>
//             <div class='modal-body'>
//               <input
//                 type='text'
//                 className='form-control'
//                 value={task_name}
//                 onChange={(e) => setTask_name(e.target.value)}
//               />
//             </div>
//             <div class='modal-footer'>
//               <button
//                 type='button'
//                 class='btn btn-warning'
//                 data-dismiss='modal'
//                 onClick={(e) => updateTodo(e)}
//               >
//                 Update
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   )
// }

// export default EditTodo
