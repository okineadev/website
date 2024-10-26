/**
 * @typedef {import('svgo').Config} SVGOConfig
 * @typedef {import('svgo').PluginConfig} PluginConfig
 */

/**
 * SVGO configuration object.
 *
 * @type {SVGOConfig}
 */
module.exports = {
	multipass: true,
	precision: 2,
	plugins: /** @type {PluginConfig[]} */ ([
		{
			name: "preset-default",
		},
		"convertStyleToAttrs",
		"removeDimensions",
		"removeOffCanvasPaths",
		"removeScriptElement",
		"removeStyleElement",
		"reusePaths",
		"sortAttrs",
	]),
};
