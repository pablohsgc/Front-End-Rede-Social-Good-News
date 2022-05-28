import './Layout.css';

export function Layout(props){
    return (
        <>
        <div className="app">
            <aside className='aside-lateral'>
                {
                    props.menu
                }
            </aside>
            <main className='main-posts'>
                {
                    props.areaMain
                }
            </main>
        </div>
        </>
    );
}