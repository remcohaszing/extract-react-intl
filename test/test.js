import test from 'ava'
import m from '../'

const pattern = 'test/fixtures/**/*.js'
const locales = ['en', 'ja']

test('extract from file', async t => {
  const x = await m(locales, pattern, { cwd: './test/fixtures' })
  t.snapshot(x)
})
