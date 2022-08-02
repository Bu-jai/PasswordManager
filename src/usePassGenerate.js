export default function usePassGenerate(length, capitalLetters, numbers, symbols) {
  let password = ''
  let charset = 'abcdefghijklmnopqrstuvwxyz'

  if (capitalLetters) {
    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  if (numbers) {
    charset += '0123456789'
  }
  if (symbols) {
    charset += '!@#$%^&*()_+'
  }

  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n))
  }
  return password
}
