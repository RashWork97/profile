import './App.css'
import ResumeDetail from './resumedetail'
import ResumeGallery from './ResumeGallery'
import ResumePic from './ResumePic'
import ResumeSideInfo from './ResumeSideInfo'

function App() {
  return (
    <>
      <div className="h-dvh min-h-[100vh] min-w-[1400px] p-8 box-border border-2">
      <div className="h-full bg-sky-400/10 rounded-lg shadow-lg p-4 font-corbel font-bold text-2xl text-left">
         My Profile
        <div className="bg-sky-100 backdrop-blur-xl grid grid-cols-10 gap-4">
          <div className="col-span-1 col-start-1 row-span-10 border rounded-sm">
            <ResumePic/>
          </div>

          <div className="col-span-3 col-start-2 row-span-40 border rounded-sm">
            <ResumeDetail/>
          </div>

          <div className='col-span-1 col-start-1 row-span-30 border'>
            <ResumeSideInfo/>
          </div>

          <div className='col-span-7 col-start-5 row-start-1 row-span-50'>
            <ResumeGallery/>
          </div>

          <div className='col-span-4 col-start-1 border row-span-10'>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
