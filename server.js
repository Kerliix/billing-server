const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const billingRoutes = require('./routes/billingRoutes');
const adminRoutes = require('./routes/adminRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB error:', err));

app.use('/api/billing', billingRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/payments', paymentRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Billing server running on port ${PORT}`));