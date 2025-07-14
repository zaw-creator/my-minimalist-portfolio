import GitHubCalendar from 'react-github-calendar';

export default function Work() {
    return (
        <div style={{ textAlign: "center"}}>
            <h1>Work Page</h1>
            <GitHubCalendar
                username="zaw-creator"
                style={{ maxWidth: "700px", margin: "0 auto" }}
            />
            <p>This is the work page of my minimalist portfolio.</p>

 

        </div>
    );
}