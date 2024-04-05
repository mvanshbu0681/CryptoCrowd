
import React from 'react'

function Header() {
//     const Menu =[
//         {
//             id:1,
//             name:'Home',
//             path:'/'
//         },
//         {
//             id:2,
//             name:'Campaigns',
//             path:'/'
//         },
//         {
//             id:3,
//             name:'Blogs',
//             path:'/'
//         },
//         {
//             id:4,
//             name:'Contact Us',
//             path:'/'
//         },       
//     ]
//   return (
//     <div className='flex items-center justify-between p-4 shadow-sm'>
//         <div className='flex items-center gap-10'>
//         {/* <Image src="" alt='logo' width={60} height={30}/> */}
//         <ul className='md:flex gap-8 hidden'>
//             {Menu.map((item,index)=>(
//                 // <Link href={item.path}>
//                 <li className='text-blue-950 hover:text-blue-600 cursor-pointer hover:scale-105 transition-all ease-in-out'>{item.name}</li>
//                 // {/* </Link> */}
//             ))}
//         </ul>
//         </div>
//         {/* <Button className='bg-blue-950'>Get Started
//         </Button> */}
//     </div>
//   )

const Menu = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'Campaigns',
      path: '/'
    },
    {
      id: 3,
      name: 'Blogs',
      path: '/'
    },
    {
      id: 4,
      name: 'Contact Us',
      path: '/'
    }
  ];
  
  return (
    <div className='bg-gray-900 text-white flex items-center justify-between p-4 shadow-sm'>
      <div className='flex items-center gap-10'>
        {/* <Image src="" alt='logo' width={60} height={30}/> */}
        <ul className='md:flex gap-8 hidden'>
          {Menu.map((item, index) => (
            // <Link href={item.path}>
            <li key={item.id} className='hover:text-blue-400 cursor-pointer hover:scale-105 transition-all ease-in-out'>{item.name}</li>
            // {/* </Link> */}
          ))}
        </ul>
      </div>
      {/* <Button className='bg-blue-950'>Get Started
      </Button> */}
    </div>
  );
  
}

export default Header