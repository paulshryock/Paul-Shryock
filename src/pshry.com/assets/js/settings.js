import Load from './settings/load.js'
import Environment from './settings/environment.js'
import FeatureDetection from './settings/feature-detection.js'

/**
 * Initialize settings.
 *
 * @since 0.2.0
 */
export function init () {
	new Load()
	new Environment()
	new FeatureDetection()
}
