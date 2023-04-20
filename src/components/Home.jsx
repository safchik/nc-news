import AllArticles from "./AllArticles";

function Home() {
    return (

        <div>

            <section>
                <>
                    <img className="background" src="https://newsroom.pinterest.com/sites/pinnews/files/post_main_content_image/2022-11/Press-18-Pin-Grid-Abstracted%20%281%29.jpg" alt="Header Image" />
                </>
            </section>
            <section>
                <AllArticles />
            </section>
        </div>
    );
}

export default Home;