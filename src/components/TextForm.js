import React from 'react'

function TextForm(props) {
  return (
<div>
  <h1>{props.heading}</h1>   
<div className="mb-3">

<textarea className="form-control" id="MyBox" rows="8" ></textarea>
</div>
      
    </div>
  )
}

export default TextForm
