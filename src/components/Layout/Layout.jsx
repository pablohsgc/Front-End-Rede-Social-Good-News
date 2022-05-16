export function Layout(props){
    return (
        <>
        <div className="App row">
            <aside className='col-lg-3 vermelho'>
                {
                    props.menu
                }
            </aside>
            <main className='col-lg-9 azul'>
                {
                    props.areaMain
                }
            </main>
        </div>
        </>
    );
}