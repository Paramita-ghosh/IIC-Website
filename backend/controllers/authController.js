import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import dotenv from 'dotenv';
import { autoMatchPendingTeamMembers } from '../utils/autoMatchTeam.js';

dotenv.config();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

export const googleCallback = async (req, res) => {
  try {
    const token = generateToken(req.user._id);
    const isComplete = req.user.isProfileComplete;

    // Auto-match user to any pending team invitations
    if (req.user.studentId) {
      await autoMatchPendingTeamMembers(req.user);
    }

    // 1. Extract the specific fields from req.user
    // NOTE: Verify that 'name' and 'avatar' match the actual field names in your MongoDB User Schema
    const userName = req.user.name;
    const userImage = req.user.avatar; // might be 'profileImage', 'picture', or 'photo' in your DB
    const userEmail = req.user.email;

    // 2. Redirect with encoded values
    res.redirect(
      `${process.env.CLIENT_URL}/login/success?token=${token}&complete=${isComplete}&name=${encodeURIComponent(userName)}&image=${encodeURIComponent(userImage)}&email=${encodeURIComponent(userEmail)}`
    );
  } catch (error) {
    console.error('Error in Google callback:', error);
    res.redirect(`${process.env.CLIENT_URL}/login/error`);
  }
};
