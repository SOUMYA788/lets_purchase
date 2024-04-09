import { Link } from 'react-router-dom'

const CustomLink = ({ title, to, className, ...props }) => {
    return (
        <Link to={to} className={`px-1 text-slate-700 font-medium dark:text-slate-300 outline-none border-none transition-all ${className}`} {...props}> {title}</Link>
    )
}

export default CustomLink