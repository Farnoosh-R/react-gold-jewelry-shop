import logo from '../../../assets/images/logo.png'

const TitleAccent = () => {
    return(
        <div id="title-accent">
            <div className="flex gap-1 items-center">
                <div className="w-[50px] h-[1px] bg-[var(--color-secondary)]/30"></div>
                <img src={logo} className='w-5 opacity-70' alt="" />
                <div className="w-[50px] h-[1px] bg-[var(--color-secondary)]/30"></div>
            </div>
        </div>
    )
}
export default TitleAccent;