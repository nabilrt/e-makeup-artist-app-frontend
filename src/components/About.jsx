import GeneralTopBar from "./topbars/GeneralTopBar";

const About=()=>{
    return(
        <>
            <GeneralTopBar/> <br/> <br/>
            <div className="container">
                <h4>E-Makeup Artist Web Application</h4>
                <p>Industry experts estimates that currently there are around 100,000 people directly involved in the sector and  at present the number of registered
                    beauty salons is over 350,000. Still there are people finding it hard to go there because going to parlor is time consuming.
                    The problem will be solved by a web-based application which is called “E-Makeup Artist Application”.</p>
            </div>

        </>
    )
}

export default About;