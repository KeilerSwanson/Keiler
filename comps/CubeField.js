import styles from '../styles/CubeField.module.scss'
import Cube from './Cube'

export default function CubeField() {
	return (
		<div className={styles.cubeField}>
			<div className={styles.cubeFieldInner}>
				<Cube />
				<Cube />
				<Cube />
				<Cube />
				<Cube />
				<Cube />
				<Cube />
				<Cube />
			</div>
		</div>
	)
}