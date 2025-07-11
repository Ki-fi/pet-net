import SideMenu from "../../components/side-menu/SideMenu.jsx";
import PageBar from "../../components/page-bar/PageBar.jsx";
import ToggleButton from "../../components/toggle-button/ToggleButton.jsx";
import Card from "../../components/card/Card.jsx";
import Avatar from "../../components/avatar/Avatar.jsx";
import Button from "../../components/button/Button.jsx";
import './Buurtgroep.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import CardContent from "../../components/card-content/CardContent.jsx";
import Snackbar from "../../components/snackbar/Snackbar.jsx";
import EmptyState from "../../components/empty-state/EmptyState.jsx";


function Buurtgroep() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let isMounted = true;

        async function fetchPosts() {
            setLoading(true);
            setError(false);
            try { const response = await axios.get('http://localhost:8080/posts');
                const results = response.data;
                if (isMounted) {
                    setPosts(results);
                }
            } catch (error) {
                if (isMounted) {
                    console.error(error);
                    setError(true);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchPosts();

        return () => {
            isMounted = false;
        }

    },[]);


    return (
        <>
            <div className="buurtgroep-page">
            <div className="menu-wrapper"><SideMenu /></div>
            <div className="content">
                <PageBar pageTitle={"Buurtgroep"}/>
                <div className="cards-wrapper">
                    <ToggleButton
                        buttonNameLeft={"Alle posts"}
                        buttonNameRight={"Mijn posts"}
                    />
                    {loading && <p>...Loading...</p>}
                    {error && <Snackbar variant={"error"} message={"Er is iets misgegaan, controleer of je verbonden bent met het internet"}/>}
                    {!error && !loading && posts.length === 0 && <EmptyState message={"Nog geen posts beschikbaar"}/>}
                    {!loading && posts.length > 0 && posts.map((post) => (
                    <Card
                        key={post.id}
                        avatar={<Avatar />}
                        title={`${post.firstName} ${post.preposition} ${post.lastName}`}
                        buttons={<Button
                            variant={"primary"}
                            buttonText="reageren"
                            onClick={() => {navigate("/posts/" + post.id)}}
                        >
                        </Button>
                        }
                    >
                        <CardContent
                            request={post.title}
                            startDate={post.startDate}
                            endDate={post.endDate}
                            remarks={post.remark}
                        />
                    </Card>
                    ))}
                </div>
                <div className="footer">
                    <Button
                        variant="fab"
                        hasIconLeft={true}
                        iconName={"add"}
                        onClick={() => {navigate("/buurtgroep/new")}}
                    />
                </div>
            </div>
            </div>
        </>
    )
}

export default Buurtgroep
