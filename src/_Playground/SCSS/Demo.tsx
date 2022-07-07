import styles from './demo.module.scss'

type Props = {}

const Demo = (props: Props) => {
    return (
        <div>
            <h1 className={styles.title}>
                Hello kitty
            </h1>
        </div>
    )
}

export default Demo