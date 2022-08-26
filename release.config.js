module.exports = {
	tagFormat: '${version}',
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				releaseRules: [
					{
						type: 'ci',
						release: 'patch'
					},
					{
						type: 'test',
						release: 'patch'
					},
					{
						type: 'chore',
						release: 'patch'
					},
					{
						type: 'style',
						release: 'patch'
					},
					{
						type: 'refactor',
						release: 'patch'
					},
					{
						type: 'docs',
						release: 'patch'
					},
					{
						type: 'build',
						release: 'patch'
					}
				]
			}
		],
		'@semantic-release/release-notes-generator',
		'@semantic-release/github'
	]
}