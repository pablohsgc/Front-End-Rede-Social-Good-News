import './Layout.css';

export function Layout(props){
    return (
        <>
        <div className="app row">
            <aside className='col-lg-3'>
                {
                    props.menu
                }
            </aside>
            <main className='col-lg-9'>
                {
                    props.areaMain
                }
            </main>
        </div>
        </>
    );
}