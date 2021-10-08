import Header from "../components/Header.jsx"

const LayoutPrincipal = ({children}) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    )
}

export default LayoutPrincipal
