---
title: "Manufacturing Defect Detection"
description: "MATLAB computer vision and deep learning inspection pipeline using ResNet-18 and the MVTec AD transistor dataset to automatically detect manufacturing defects."
repository: "https://github.com/santosrai/Image-Based-Defect-Detection-for-Manufacturing-Inspection"
technologies: ["MATLAB", "Deep Learning", "ResNet-18", "Computer Vision", "Image Processing"]
status: "completed"
featured: false
date: "2026-08-07"
screenshot: "/projects/manufacturing-defect-detection.webp"
---

# Image-Based Defect Detection for Manufacturing Inspection

An automated visual quality inspection pipeline built in MATLAB that combines classical image processing with transfer learning on a ResNet-18 convolutional neural network to identify manufacturing defects in electronic transistors.

## Key Features

- **End-to-End Inspection Script**: Single-entry MATLAB workflow (`ImageBasedDefectSystem.m` / `.mlx`) that loads the transistor dataset, ground-truth labels, and pre-trained networks automatically.
- **Transfer Learning with ResNet-18**: Uses MATLAB's Deep Learning Toolbox and the ResNet-18 network architecture for accurate visual defect classification.
- **Real Industrial Benchmark**: Trained and evaluated against the transistor category from the [MVTec AD](https://www.mvtec.com/research-teaching/datasets/mvtec-ad) anomaly detection dataset.
- **Image Preprocessing & Evaluation**: Integrates image preprocessing utilities and statistical performance evaluation across defect classes.

## MATLAB Toolboxes & Stack

- **Image Processing Toolbox**: Preprocessing, normalization, and visual inspection utilities.
- **Deep Learning Toolbox & ResNet-18**: Pre-trained CNN fine-tuning and inference.
- **Statistics and Machine Learning Toolbox**: Model evaluation, metrics, and classification analysis.
