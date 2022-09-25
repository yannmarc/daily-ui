import React, { Fragment } from 'react'
import Dropdown from './Dropdown'
import Input from './Input'
import Submit from './Submit'

const Form = () => {
    const inputs = [
        {
            id: 1,
            name: 'username',
            placeholder: 'Enter Name',
            errormessage: 'This field cannot be empty'
        },
        {
            id: 2,
            name: 'matricule',
            placeholder: 'Enter Matricule Number',
            errormessage: 'This field cannot be empty'
        },
        {
            id: 3,
            name: 'department',
            placeholder: 'Enter Department',
            errormessage: 'This field cannot be empty'
        },
    ]
  return (
    <Fragment>
        <div className="form px-[51px] py-[86px] bg-white col-span-6">
            <form action="">
                <div className="form-group"><h1 className='text-[36px] font-bold text-[#0B3C49]'>Personal Information</h1></div>
                
                {
                    inputs.map((input, index) => (
                        <div className="form-group">
                            <Input name={input.name} placeholder={input.placeholder} errMessage={input.errormessage}/>
                        </div>
                    ))
                }
                <div className="form-group grid grid-cols-2 gap-4">
                    <Dropdown />
                    <Input 
                    name={'semester'}
                    placeholder={'Semester'}
                    errMessage={'This field cannot be empty'}
                    />
                </div>
                <Submit />
            </form>
        </div>
    </Fragment>
  )
}

export default Form