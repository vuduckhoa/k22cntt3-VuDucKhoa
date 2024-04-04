import React from 'react'

export default function Func_JSX_vuduckhoa(props) {
    const users={
        name:"Vu Duc Khoa",
        age:20
    }
  return (
    <div>
        <h2>Function component</h2>
        <h3>
            welcom to,{users.name}-{users.age}
        </h3>
        <hr>
        <h3>Props:
            <br/> fullName: {props.fullName}
            <br/> age: {props.age}
        </h3>
        </hr>
    </div>
  )
}
