import Link from 'next/link'; 
 const Home = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
       Click <Link href="/documents/123"> <span className='text-slate-500'>Here</span> </Link> to go to document page
      
    </div>
  )
 }

 export default Home;