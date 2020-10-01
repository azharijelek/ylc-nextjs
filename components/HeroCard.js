export default function HeroCard(props) {
    return (
        <>
            <section className="hs-card">
                <h2>{props.title}</h2>
                <img src={props.thumbnail} alt={props.title} loading="lazy"/>
            </section>
            
            <style jsx>{`
            .hs-card {
                width: 300px;
                height: 200px;
                background: #ddd;
                border-radius: 8px;
                position: relative;
                overflow: hidden;
                background: #f5f5f5;

                h2 {
                    display: block;
                    width: 100%;
                    height: auto;
                    background: rgba(0,0,0,.7);
                    padding: 13px;
                    font-size:16px;
                    font-weight: bold;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    color: #fff;
                    margin: 0;
                    text-align:left;
                    min-height: 70px;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            `}</style>
        </>
    )
}