import mongoose from "mongoose";
import { Topic } from "../models/topic.model";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI
const seedTopics = async () => {
    try {
        await mongoose.connect(MONGO_URI as string);
        console.log("Connected to MongoDB!!");

        // Clear existing data before inserting
        await Topic.deleteMany({});
        console.log("Cleared existing Topics");

        // Dummy data
        const topics = [
            {
                name: "Arrays",
                subtopics: [
                    {
                        problems: [
                            {
                                name: "Two Sum",
                                leetcodeLink: "https://leetcode.com/problems/two-sum/",
                                youtubeLink: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
                                articleLink: "https://leetcode.com/problems/two-sum/solutions/",
                                level: "Easy",
                                status: "Solved",
                            },
                            {
                                name: "Best Time to Buy and Sell Stock",
                                leetcodeLink:
                                    "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
                                youtubeLink: "https://www.youtube.com/watch?v=1pkOgXD63yU",
                                articleLink:
                                    "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/",
                                level: "Easy",
                                status: "Unsolved",
                            },
                            {
                                name: "3Sum",
                                leetcodeLink: "https://leetcode.com/problems/3sum/",
                                youtubeLink: "https://www.youtube.com/watch?v=jzZsG8n2R9A",
                                articleLink: "https://leetcode.com/problems/3sum/solutions/",
                                level: "Medium",
                                status: "In Progress",
                            },
                            {
                                name: "Median of Two Sorted Arrays",
                                leetcodeLink: "https://leetcode.com/problems/search-in-rotated-sorted-array/description/?envType=problem-list-v2&envId=array",
                                youtubeLink: "https://www.youtube.com/watch?v=6WNZQBHWQJs",
                                articleLink: "https://leetcode.com/problems/3sum/solutions/",
                                level: "Medium",
                                status: "In Progress",
                            },
                            {
                                name: "Peak Index in Mountain Array",
                                leetcodeLink: "https://leetcode.com/problems/peak-index-in-a-mountain-array/description/?envType=problem-list-v2&envId=array",
                                youtubeLink: "https://www.youtube.com/watch?v=RjxD6UXGlhc",
                                articleLink: "https://leetcode.com/problems/3sum/solutions/",
                                level: "Medium",
                                status: "In Progress",
                            },
                            {
                                name: "N-Queens",
                                leetcodeLink: "https://leetcode.com/problems/n-queens/description/?envType=problem-list-v2&envId=array",
                                youtubeLink: "https://www.youtube.com/watch?v=RjxD6UXGlhc",
                                articleLink: "https://leetcode.com/problems/3sum/solutions/",
                                level: "Medium",
                                status: "In Progress",
                            },
                        ],
                    },
                ],
            },
            {
                name: "Dynamic Programming",
                subtopics: [
                    {
                        problems: [
                            {
                                name: "Climbing Stairs",
                                leetcodeLink: "https://leetcode.com/problems/climbing-stairs/",
                                youtubeLink: "https://www.youtube.com/watch?v=Y0lT9Fck7qI",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Easy",
                                status: "Solved",
                            },
                            {
                                name: "Trapping Rain Water",
                                leetcodeLink: "https://leetcode.com/problems/trapping-rain-water/?envType=problem-list-v2&envId=dynamic-programming",
                                youtubeLink: "https://www.youtube.com/watch?v=UHHp8USwx4M",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "Maximum Sub Array",
                                leetcodeLink: "https://leetcode.com/problems/maximum-subarray?envType=problem-list-v2&envId=dynamic-programming",
                                youtubeLink: "https://www.youtube.com/watch?v=9IZYqostl2M",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                            {
                                name: "Palindrome Partitioning",
                                leetcodeLink: "https://leetcode.com/problems/palindrome-partitioning/description/?envType=problem-list-v2&envId=dynamic-programming",
                                youtubeLink: "https://www.youtube.com/watch?v=aZ0B1eWkSVU",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "Counting Bits",
                                leetcodeLink: "https://leetcode.com/problems/palindrome-partitioning/description/?envType=problem-list-v2&envId=dynamic-programming",
                                youtubeLink: "https://www.youtube.com/watch?v=J1hCybwTVVE&pp=ygUjQ291bnRpbmcgQml0cyBkcCBieSBzaHJhZGRoYSBraGFwcmE%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Easy",
                                status: "Solved",
                            },
                        ],
                    },
                ],
            },
            {
                name: "Hash Map",
                subtopics: [
                    {
                        problems: [
                            {
                                name: "Valid Sudoku",
                                leetcodeLink: "https://leetcode.com/problems/valid-sudoku/description/?envType=problem-list-v2&envId=hash-table",
                                youtubeLink: "https://www.youtube.com/watch?v=70cP3qtJp-s&t=705s&pp=ygUfdmFsaWQgc3Vkb2t1IGJ5IHNocmFkZGhhIGtoYXByYQ%3D%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                            {
                                name: "LFU Cache",
                                leetcodeLink: "https://leetcode.com/problems/lfu-cache/?envType=problem-list-v2&envId=hash-table",
                                youtubeLink: "https://www.youtube.com/watch?v=GsY6y0iPaHw&pp=ygUcbGZ1IGNhY2hlIGJ5IHNocmFkZGhhIGtoYXByYQ%3D%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "Degree of an Array",
                                leetcodeLink: "https://leetcode.com/problems/degree-of-an-array/description/?envType=problem-list-v2&envId=hash-table",
                                youtubeLink: "https://www.youtube.com/watch?v=9IZYqostl2M",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Easy",
                                status: "Solved",
                            },
                            {
                                name: "All Nodes Distance K in Binary Tree",
                                leetcodeLink: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree?envType=problem-list-v2&envId=hash-table",
                                youtubeLink: "https://www.youtube.com/watch?v=i9ORlEy6EsI",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                            {
                                name: "Vowel Spellchecker",
                                leetcodeLink: "https://leetcode.com/problems/vowel-spellchecker/description/?envType=problem-list-v2&envId=hash-table",
                                youtubeLink: "https://www.youtube.com/watch?v=J1hCybwTVVE&pp=ygUjQ291bnRpbmcgQml0cyBkcCBieSBzaHJhZGRoYSBraGFwcmE%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                        ],
                    },
                ],
            },
            {
                name: "Linked List",
                subtopics: [
                    {
                        problems: [
                            {
                                name: "Merge Two Sorted Lists",
                                leetcodeLink: "https://leetcode.com/problems/merge-two-sorted-lists/description/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=f8RPIb-0DDE",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Easy",
                                status: "Solved",
                            },
                            {
                                name: "Design Linked List",
                                leetcodeLink: "https://leetcode.com/problems/design-linked-list/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=GsY6y0iPaHw&pp=ygUcbGZ1IGNhY2hlIGJ5IHNocmFkZGhhIGtoYXByYQ%3D%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                            {
                                name: "Design Skip List",
                                leetcodeLink: "https://leetcode.com/problems/design-skiplist/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=9IZYqostl2M",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "Minimum Pair Removal to Sort Array I",
                                leetcodeLink: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=i9ORlEy6EsI",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                            {
                                name: "Minimum Pair Removal to Sort Array II",
                                leetcodeLink: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-ii/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=J1hCybwTVVE&pp=ygUjQ291bnRpbmcgQml0cyBkcCBieSBzaHJhZGRoYSBraGFwcmE%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                        ],
                    },
                ],
            },
            {
                name: "Probability and Statistics",
                subtopics: [
                    {
                        problems: [
                            {
                                name: "Soup Servings",
                                leetcodeLink: "https://leetcode.com/problems/implement-rand10-using-rand7/description/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=f8RPIb-0DDE",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Easy",
                                status: "Solved",
                            },
                            {
                                name: "Probability of Two Boxes",
                                leetcodeLink: "https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/description/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=GsY6y0iPaHw&pp=ygUcbGZ1IGNhY2hlIGJ5IHNocmFkZGhhIGtoYXByYQ%3D%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "Airplane Seat Assignment Probability",
                                leetcodeLink: "https://leetcode.com/problems/airplane-seat-assignment-probability/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=9IZYqostl2M",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "Toss Strange Coins",
                                leetcodeLink: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=i9ORlEy6EsI",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                            {
                                name: "New 21 Game",
                                leetcodeLink: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-ii/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=J1hCybwTVVE&pp=ygUjQ291bnRpbmcgQml0cyBkcCBieSBzaHJhZGRoYSBraGFwcmE%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                        ],
                    },
                ],
            },
            {
                name: "String",
                subtopics: [
                    {
                        problems: [
                            {
                                name: "Roman To Integer",
                                leetcodeLink: "https://leetcode.com/problems/implement-rand10-using-rand7/description/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=f8RPIb-0DDE",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Easy",
                                status: "Solved",
                            },
                            {
                                name: "Generate Parantheses",
                                leetcodeLink: "https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/description/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=GsY6y0iPaHw&pp=ygUcbGZ1IGNhY2hlIGJ5IHNocmFkZGhhIGtoYXByYQ%3D%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                            {
                                name: "Expression Add Operators",
                                leetcodeLink: "https://leetcode.com/problems/airplane-seat-assignment-probability/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=9IZYqostl2M",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "Convert a NUmber To Hexadecimal",
                                leetcodeLink: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=i9ORlEy6EsI",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                            {
                                name: "Tag Validator",
                                leetcodeLink: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-ii/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=J1hCybwTVVE&pp=ygUjQ291bnRpbmcgQml0cyBkcCBieSBzaHJhZGRoYSBraGFwcmE%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                        ],
                    },
                ],
            },
             {
                name: "Bitmask",
                subtopics: [
                    {
                        problems: [
                            {
                                name: "Parallel Courses II",
                                leetcodeLink: "https://leetcode.com/problems/implement-rand10-using-rand7/description/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=f8RPIb-0DDE",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "Closest Subsequence Sum",
                                leetcodeLink: "https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/description/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=GsY6y0iPaHw&pp=ygUcbGZ1IGNhY2hlIGJ5IHNocmFkZGhhIGtoYXByYQ%3D%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "Minimum Time To Transport All Individuals",
                                leetcodeLink: "https://leetcode.com/problems/airplane-seat-assignment-probability/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=9IZYqostl2M",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "Longest Palindromic Path in Graph",
                                leetcodeLink: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=i9ORlEy6EsI",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                            {
                                name: "Maximize Grid Happiness",
                                leetcodeLink: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-ii/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=J1hCybwTVVE&pp=ygUjQ291bnRpbmcgQml0cyBkcCBieSBzaHJhZGRoYSBraGFwcmE%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                        ],
                    },
                ],
            },
             {
                name: "Monotonic Queue",
                subtopics: [
                    {
                        problems: [
                            {
                                name: "Max Value Of Equation",
                                leetcodeLink: "https://leetcode.com/problems/implement-rand10-using-rand7/description/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=f8RPIb-0DDE",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Easy",
                                status: "Solved",
                            },
                            {
                                name: "Continous SubArrays",
                                leetcodeLink: "https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/description/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=GsY6y0iPaHw&pp=ygUcbGZ1IGNhY2hlIGJ5IHNocmFkZGhhIGtoYXByYQ%3D%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "Jump Game VI",
                                leetcodeLink: "https://leetcode.com/problems/airplane-seat-assignment-probability/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=9IZYqostl2M",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "Delivery Boxes From Storage to Pots",
                                leetcodeLink: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=i9ORlEy6EsI",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                            {
                                name: "Minimize umber Of Coins For Fruits",
                                leetcodeLink: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-ii/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=J1hCybwTVVE&pp=ygUjQ291bnRpbmcgQml0cyBkcCBieSBzaHJhZGRoYSBraGFwcmE%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                        ],
                    },
                ],
            },
             {
                name: "Number Theory",
                subtopics: [
                    {
                        problems: [
                            {
                                name: "Ugly Number III",
                                leetcodeLink: "https://leetcode.com/problems/implement-rand10-using-rand7/description/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=f8RPIb-0DDE",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                            {
                                name: "Tree Of Coprimes",
                                leetcodeLink: "https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/description/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=GsY6y0iPaHw&pp=ygUcbGZ1IGNhY2hlIGJ5IHNocmFkZGhhIGtoYXByYQ%3D%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "Sum Of Beautiful SUbsequences",
                                leetcodeLink: "https://leetcode.com/problems/airplane-seat-assignment-probability/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=9IZYqostl2M",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "GCD Of Odd and Even Sums",
                                leetcodeLink: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=i9ORlEy6EsI",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Easy",
                                status: "Solved",
                            },
                            {
                                name: "Check Prime Frequency",
                                leetcodeLink: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-ii/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=J1hCybwTVVE&pp=ygUjQ291bnRpbmcgQml0cyBkcCBieSBzaHJhZGRoYSBraGFwcmE%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Easy",
                                status: "Solved",
                            },
                        ],
                    },
                ],
            },
             {
                name: "Recursion",
                subtopics: [
                    {
                        problems: [
                            {
                                name: "Reorder List",
                                leetcodeLink: "https://leetcode.com/problems/implement-rand10-using-rand7/description/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=f8RPIb-0DDE",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Easy",
                                status: "Solved",
                            },
                            {
                                name: "Factorial",
                                leetcodeLink: "https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/description/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=GsY6y0iPaHw&pp=ygUcbGZ1IGNhY2hlIGJ5IHNocmFkZGhhIGtoYXByYQ%3D%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Easy",
                                status: "Solved",
                            },
                            {
                                name: "Unique 3 Digits Even Number",
                                leetcodeLink: "https://leetcode.com/problems/airplane-seat-assignment-probability/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=9IZYqostl2M",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                            {
                                name: "Permutation Sequence",
                                leetcodeLink: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=i9ORlEy6EsI",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "Basic Calculator",
                                leetcodeLink: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-ii/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=J1hCybwTVVE&pp=ygUjQ291bnRpbmcgQml0cyBkcCBieSBzaHJhZGRoYSBraGFwcmE%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                        ],
                    },
                ],
            },
             {
                name: "Backtracking",
                subtopics: [
                    {
                        problems: [
                            {
                                name: "Letter Case Permutation",
                                leetcodeLink: "https://leetcode.com/problems/implement-rand10-using-rand7/description/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=f8RPIb-0DDE",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "Sliding Puzzle",
                                leetcodeLink: "https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/description/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=GsY6y0iPaHw&pp=ygUcbGZ1IGNhY2hlIGJ5IHNocmFkZGhhIGtoYXByYQ%3D%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                            {
                                name: "Pyramid Transition Matrix",
                                leetcodeLink: "https://leetcode.com/problems/airplane-seat-assignment-probability/?envType=problem-list-v2&envId=probability-and-statistics",
                                youtubeLink: "https://www.youtube.com/watch?v=9IZYqostl2M",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Medium",
                                status: "Solved",
                            },
                            {
                                name: "Binary Watch",
                                leetcodeLink: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=i9ORlEy6EsI",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Easy",
                                status: "Solved",
                            },
                            {
                                name: "24 Game",
                                leetcodeLink: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-ii/?envType=problem-list-v2&envId=linked-list",
                                youtubeLink: "https://www.youtube.com/watch?v=J1hCybwTVVE&pp=ygUjQ291bnRpbmcgQml0cyBkcCBieSBzaHJhZGRoYSBraGFwcmE%3D",
                                articleLink: "https://leetcode.com/problems/climbing-stairs/solutions/",
                                level: "Hard",
                                status: "Solved",
                            },
                        ],
                    },
                ],
            },

        ];

        // Insert the data
        await Topic.insertMany(topics);
        console.log("Topics seeded successfully!");

        //  Disconnect after seeding
        await mongoose.disconnect();
        console.log("MongoDB disconnected");
        process.exit(0);
    } catch (err) {
        console.error("❌ Seeding error:", err);
        process.exit(1);
    }
};

seedTopics();
