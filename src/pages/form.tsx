import {  useForm } from "react-hook-form"
import {DevTool} from '@hookform/devtools'

type formValues={
username:string,
email:string,
password:string,
'repeat-password':string
}
export default function TestForm() {
    const testform=useForm<formValues>()
    const {register,control,handleSubmit,formState}=testform
    const {errors}=formState
    const onSubmit=(value:formValues)=>{
        console.log('values',value)
    }
    
  return (
    <div className ='mx-10 border border-gray-300 flex justify-center items-center flex-col'>
<p className='text-[24px] font-bold my-4 text-center'>React Hook Form Practice </p>
<form className='w-full px-4 ' onSubmit={handleSubmit(onSubmit)} noValidate>
<div className="mb-6">
    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Your username</label>
    <input type="text" 
    id="username"
     className="shadow-sm bg-gray-50 border 
     border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
      placeholder="name@flowbite.com" 
     {...register('username',{required:{value:true,message:'username is required'}})} />
     <p className="text-[9px] text-red-600">{errors?.username?.message}</p>
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="shadow-sm bg-gray-50 border
     border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
      placeholder="name@flowbite.com" 
      {...register('email', {
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: 'Invalid'
        },
      })}
     />
      <p className="text-[9px] text-red-600">{errors?.email?.message}</p>
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password"
    {...register('password',{required:{value:true,message:'password is required'}})} 
      id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required/>
   <p className="text-[9px] text-red-600">{errors?.password?.message}</p>
  </div>
  <div className="mb-6">
    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
    <input type="password" 
    {...register('repeat-password')} 
     id="repeat-password"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required/>
  </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" name='checkbox' className="w-4 h-4 border border-gray-300 rounded bg-gray-50
       focus:ring-3 focus:ring-blue-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
    </div>
    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline ">terms and conditions</a></label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register new account</button>
</form>
<DevTool control={control}/>
    </div>
  )
}
