import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(menuData)
  return (
    <>

     <section className='main-card--cointainer'>
         
       {menuData.map((curElem)=>{

return(
 <div className="card-container key={curElem.id}">
 <div className="card">
     <div className="card-body">
         <span className='card-number card-circle subtle'>
            {curElem.id}
         </span>
         <span className="card-author subtle" style={{color:"red"}}>{curElem.name}</span>
         <h2 className='card-title'>{curElem.name}</h2>
         <span className="card-description subtle">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ad facere delectus libero! Doloremque ullam velit ex. Nobis, magnam libero minus quis nisi ipsam, reiciendis, architecto distinctio consequuntur eum maxime.

         </span>
         <div className="card-read">Read</div>

         
     </div>
     <img src={curElem.image} alt="images" className='card-media' />
     <span className="card-tag subtle">Order Now</span>

 </div>
</div>


)
})}


     </section>
    
    </>
  )
}

export default MenuCard
