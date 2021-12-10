import styles from "./panels.module.css"
import {Button} from "antd";
import Router from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {isAuthorizationAC} from "../../store/authorization";

const Panel2 = () => {
    const dispatch = useDispatch()
    const isAuthorization = useSelector(state => state.authorization.isAuthorization)
    const logout = () => {
        dispatch(isAuthorizationAC(false))
    }
    if (!isAuthorization) {
        Router.push('/authorization')
    }
    return (
        <div className={styles.panel2}>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet
                aspernatur assumenda commodi culpa cum dignissimos, doloribus eius, esse
                eveniet fugiat maiores molestias mollitia possimus quia similique sit
                vitae! Consectetur!
            </div>
            <div>Amet consectetur consequuntur cumque necessitatibus odio. Accusantium
                commodi cum dolore eaque esse labore minus nemo repudiandae sunt
                temporibus. Ad aperiam dicta id laborum necessitatibus obcaecati odio
                provident quasi temporibus ut!
            </div>
            <div>Accusamus consectetur deserunt expedita explicabo iusto recusandae. Autem
                consectetur ducimus ea iste laborum numquam possimus quasi, quia quisquam
                quod repudiandae voluptatibus. A dolore est ex id perferendis praesentium
                quam voluptates!
            </div>
            <div>Cumque dolor ducimus enim fuga libero modi nam officia, omnis
                perspiciatis voluptate? Aperiam architecto at blanditiis dolores esse,
                eum, ex explicabo illo magni modi nemo nulla officia sequi, veniam
                voluptas?
            </div>
            <div>Commodi ducimus excepturi magnam necessitatibus veniam? Ab aut
                consequatur cupiditate dignissimos doloremque eius eum, exercitationem
                explicabo, facere magnam molestiae mollitia natus non placeat praesentium,
                quo quod quos sed sequi suscipit?
            </div>
            <div>Architecto aspernatur at culpa delectus nostrum quisquam velit. Cum, eos,
                libero! Amet animi, asperiores dicta expedita laborum maxime molestias
                nemo nihil nobis, omnis provident reiciendis repellendus, tenetur ullam
                unde veritatis?
            </div>
            <div>Animi dicta eos nobis rem similique! Ab asperiores distinctio, esse eum
                ex excepturi exercitationem hic id ipsa, iste itaque obcaecati officia
                quaerat quas quod saepe sed tempora tempore ullam vel?
            </div>
            <Button onClick={logout} style={{
                background: "dodgerblue",
                color: "white",
                borderRadius: "5px",
                width: "300px"
            }}>ВЫХОД</Button>
        </div>
    );
};

export default Panel2;