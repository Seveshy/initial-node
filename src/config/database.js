module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'rocket',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};