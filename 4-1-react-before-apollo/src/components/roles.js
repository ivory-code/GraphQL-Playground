import './components.css';

function Roles() {

    function AsideItems () {
        return (<div></div>);
    }

    function MainContents () {
        return (<div></div>);
    }

    return (
        <div id="roles" className="component">
            <aside>
                {AsideItems()}
            </aside>
            <section className="contents">
                {MainContents()}
            </section>
        </div>
    )
}

export default Roles;