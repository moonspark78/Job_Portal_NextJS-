"use client";
import { Session } from 'next-auth'
import React from 'react'


interface Props{
    session: Session;
}

const User = ({session}: Props) => {
  return (
    <div className='cursor-pointer'>
        <img src={`${session?.user?.image}`} alt='user-icon'/>
    </div>
  )
}

export default User