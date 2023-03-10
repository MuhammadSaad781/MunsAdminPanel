import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Checkbox } from "@material-ui/core";
import Select from "react-select";
import * as yup from "yup";
export default function Valet() {
  const schema = yup.object({
    email: yup.string().required("Email is required."),
    password: yup.string().required("Password is required").min(8,"Password must be 8 characters long"),
   
   routeitem: yup.string().required(),

  }).required();
  const { register, handleSubmit, control, formState:{ errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      checkbox:false
    }
  });
  const onSubmit = data => console.log(data);
  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
      

    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="MunsValet@gmail.com" {...register("email")} />
            <p>{errors.email?.message}</p>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" {...register("password")}/>
            <p>{errors.password?.message}</p>
        </div>
        
    </div>
    <div class=" gap-6 mb-6 ">
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valet Active</label>
      <Controller
          name="checkbox"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Checkbox {...field} {...register("checkbox")} />}
        />
    </div>
    <div class=" gap-6 mb-6 ">
      <div class=" gap-6 mb-6 ">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Route</label>
        <select {...register("routeitem")}>
            <option value="Independence Place">Independece Place</option>
            <option value="Lake Fairway">Lake Fairway</option>
            <option value="Sun Hollow">Sun Hollow</option>
            <option value="Ridgemar">Ridgemar</option>
            <option value="Spring Park">Spring Park</option>
            <option value="Cliffside at Mountain Park">Cliffside at Mountain Park</option>
            <option value="Desert Commons">Desert Commons</option>
          </select>
          <p>{errors.routeitem?.message}</p>
      </div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
        <input value="Valet" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("role")}/>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

      
      
   
    </div>
  )
}
