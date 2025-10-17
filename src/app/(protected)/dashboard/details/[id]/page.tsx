import React from 'react'

const page = ({params}:{params:any}) => {
  return (
    <div>item details : {params?.id}</div>
  )
}

export default page