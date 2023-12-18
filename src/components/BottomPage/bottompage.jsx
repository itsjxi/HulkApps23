

 import "./bottompage.css" // importing the css file for styling 


 //in this i put the images in a seperate file and export them here as there are no functions on this section so i keep it in a simple component form

 const BottomPage = () => {
     return (
       <div className="madeForYou">
 
         <div className="box box-1">
           <div>
             <h3>Made For You</h3>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi distinctio hic corporis.</p>
             <div className='btnBox'><button>Learn More</button></div>
           </div>
           <div className="imgBox">
             <img src="/images/image2.jpg" alt="image" />
           </div>
         </div>
 
         <div className='box box-2'>
           <img src="/images/image1.jpg" alt="image" />
           <img src="/images/image3.png" alt="image" />
         </div>  
 
         <div className='box box-3'>
           <div className="Find-Your">
             <div className="Find-Your-box">
               <img src="/images/image4.jpg" alt="image" />
               <h3>Find Your Sparkle</h3>
               <p>Shop Our Products</p>
             </div>
           </div>
         </div>
 
       </div>
     );
   };
   
   export default BottomPage;