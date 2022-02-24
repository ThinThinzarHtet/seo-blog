const Layout = ({ children }) => {
    return (
        <>
            <p>Header</p>

            {children}

            <p>Footer</p>
        </>
    )
}

export default Layout;

// function Layout(props) {
//     return (
//         <>
//             <p>Header</p>

//             {props.children}

//             <p>Footer</p>
//         </>
//     )
// }

// export default Layout