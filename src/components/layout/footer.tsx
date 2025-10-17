export default function Footer(){
    return(
 <footer className="w-full bg-gray-800 text-gray-300 py-4 mt-10">
      <div className="max-w-7xl mx-auto text-center text-sm">
        <p>© {new Date().getFullYear()} NextJSPractice. All rights reserved.</p>
      </div>
    </footer> 
    
  )
}