export default function Card({ children }: { children: React.ReactNode }){
    return(
        <div className={`flex-1 flex-col h-60 max-h-full max-w-full m-3 p-5 bg-white border border-gray-200 
        rounded-lg shadow hover:bg-gray-100`}>
            {children}
        </div>
    )
}