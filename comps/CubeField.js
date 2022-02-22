import Cube from './Cube'
import styles from '../styles/CubeField.module.scss'

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