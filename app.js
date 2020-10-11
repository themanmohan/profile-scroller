const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

 const result=profileDeatils(data)


const next=document.getElementById('next')

next.addEventListener('click',displayprofile)

function displayprofile(){
    const currentprofile = result.next().value
  const display=document.getElementById('profileDisplay')

  display.innerHTML=`
     <ul class="list-group">
      <li  class="list-group-item">Name :-${currentprofile.name}</li>
       <li  class="list-group-item">Age :-${currentprofile.age}</li>
        <li  class="list-group-item">Gender :-${currentprofile.gender}</li>
         <li  class="list-group-item">Location :-${currentprofile.location}</li>
          <li  class="list-group-item">Looking for :-${currentprofile.lookingfor}</li>
     </ul>
  `;

  document.getElementById('imageDisplay').innerHTML=`
  <img src=${currentprofile.image} alert="egdvhegd" />
  `
}
function profileDeatils(profile){

 let profileIndex=0
 return {
   next:function(){
      return profileIndex<profile.length?{value:profile[profileIndex++],done:false}:{done:true}
   }
 }
}



