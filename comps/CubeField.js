import { memo } from 'react'
import Cube from './Cube'
import styles from '../styles/CubeField.module.scss'

function CubeField() {

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

export default memo(CubeField)